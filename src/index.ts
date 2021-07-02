import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(express.json());

// Create a new topic
app.post('/topics', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(403).json({ error: 'name and description are required' });
    return;
  }

  try {
    const newTopic = await prisma.topic.create({
      data: {
        name,
        description,
      },
    });
  
    res.json({ newTopic });
  } catch (error) {
    console.log(`Error creating resource: ${error}`);

    res.status(500).json({error: 'Something went wrong!'})
  }

});

// Add a resource to a topic
app.post('/topics/:topicUuid/resources', async (req, res) => {
  const { topicUuid } = req.params;
  const { name, description, url, tags, type } = req.body;

  if (!name || !description || !url || !tags || !type) {
    res.status(403).json({error: 'name, description, url, tags and type are all required'});
  }

  try {
    const newResource = await prisma.resource.create({
      data: {
        name,
        description,
        url,
        tags,
        type,
        Topic: { connect: { uuid: topicUuid } },
      },
    });

    res.json({ newResource });
  } catch (error) {
    console.log(`Error creating resource: ${error}`);

    res.status(500).json({error: 'Something went wrong!'})
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
