import { LearnersPage } from '../../../pages/learners/pages/learnersPage';

const { When } = require("cucumber");

When(/^I view the "(.*)" learner record$/, LearnersPage.viewSpecificLearner);
