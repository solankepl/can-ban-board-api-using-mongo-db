// A simple welcome route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Node.js MongoDB API!');
});

/**
 * @route   POST /api/users
 * @desc    Create a new user
 * @access  Public
 */
/*app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Simple validation
    if (!name || !email) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User with that email already exists' });
    }

    const newUser = new User({
      name,
      email,
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});*/


