const { When } = require("cucumber");

import { ProgrammeQualificationsTab } from "../../../pages/programmes/tabs/programmeQualificationsTab";

// General CTA which we could move out into a generic class?
When(/^I click the 'Edit' CTA$/, ProgrammeQualificationsTab.clickEdit);
