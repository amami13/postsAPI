// This file contains the code that handles the requests made to /post

const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET route made to fetch all posts
router.get('/post', async (req, res) => {
    try {
      // Fetch all posts from the Post model
      const posts = await Post.find();
      // Return the posts as a JSON response
      res.status(200).json(posts);
    } catch (error) {
      // Handle any errors that occur during the fetch
      res.status(500).json({ message: 'Error fetching posts', error });
    }
  });

// GET route made to fetch all posts made by a sender by ID
router.get('/post/:sender_id', async (req, res) => {
    const { sender_id } = req.params;
    try {
      // Fetch all posts from the Post model by sender ID
      const posts = await Post.find({ _id: sender_id });
      // Return the posts as a JSON response
      res.status(200).json(posts);
    } catch (error) {
      // Handle any errors that occur during the fetch
      res.status(500).json({ message: 'Error fetching posts', error });
    }
  });

// Post route to create new posts
router.post('/post', 
    async (req, res) => { 
        const { message, sender } = req.body; 
        if (!message || !sender) { 
            return res.status(400).json({ message: 'Message and sender body params are required' }); 
        } try { 
            const newPost = new Post({ message, sender }); 
            await newPost.save(); 
            res.status(201).json(newPost); 
        } catch (error) { 
            res.status(500).json({ message: `Error saving post ${error}`, error }); 
        } 
    });
  
module.exports = router;