const adminModel = require('../models/Admin.model');

// Get Admin Info by ID
const getAdminInfo = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID format before querying (optional but recommended)
        if (!id || id.length !== 24) {
            return res.status(400).json({ message: 'Invalid admin ID format' });
        }

        const adminInfo = await adminModel.findById(id).select('-password');
        if (!adminInfo) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json(adminInfo);
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching admin',
            error: err.message,
        });
    }
};

module.exports = getAdminInfo;