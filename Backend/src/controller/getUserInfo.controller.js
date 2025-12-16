const userModel = require('../models/User.model');

const getUserInfo = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Validate ID format before querying (avoids unnecessary DB hit)
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    // ✅ Lean query for performance (returns plain JS object, not Mongoose doc)
    const userInfo = await userModel.findById(id).select('-password').lean();

    if (!userInfo) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(userInfo);
  } catch (err) {
    console.error('Error fetching user:', err.message);
    return res.status(500).json({
      message: 'Error fetching user',
      error: err.message,
    });
  }
};

module.exports = getUserInfo 