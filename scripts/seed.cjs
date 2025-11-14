const mongoose = require('mongoose');
const RequestType = require('../src/models/RequestType.js');

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/support-api';

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const requestTypes = [
  {
    code: 'TECH_ISSUE',
    name: 'Problème technique',
    description: 'Problème technique rencontré par l’utilisateur',
    priority: 'high',
    category: 'technical',
    estimatedResponseTime: 24,
    isActive: true
  },
  {
    code: 'BILLING_QUESTION',
    name: 'Question de facturation',
    description: 'Interrogation sur la facturation ou paiement',
    priority: 'medium',
    category: 'billing',
    estimatedResponseTime: 48,
    isActive: true
  },
  {
    code: 'ACCOUNT_CHANGE',
    name: 'Demande de modification de compte',
    description: 'Modification des informations du compte utilisateur',
    priority: 'medium',
    category: 'account',
    estimatedResponseTime: 24,
    isActive: true
  },
  {
    code: 'FEATURE_REQUEST',
    name: 'Demande de fonctionnalité',
    description: 'Suggestion d’amélioration ou nouvelle fonctionnalité',
    priority: 'low',
    category: 'feature',
    estimatedResponseTime: 72,
    isActive: true
  },
  {
    code: 'COMPLAINT',
    name: 'Réclamation',
    description: 'Réclamation d’un utilisateur',
    priority: 'critical',
    category: 'support',
    estimatedResponseTime: 12,
    isActive: true
  }
];

const seedDatabase = async () => {
  try {
    await RequestType.deleteMany();
    await RequestType.insertMany(requestTypes);
    console.log('Database seeded successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Seeding error:', error);
    mongoose.disconnect();
  }
};

seedDatabase();
