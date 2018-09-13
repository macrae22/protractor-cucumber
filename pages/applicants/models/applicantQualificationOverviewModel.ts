import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export default class ApplicantQualificationOverviewModel {
    private readonly elements = {
        qualificationOverview: element.all(by.css('.form-check-label')), //may need to find a better way to select these radio options
        qualificationOverviewYesNo: element.all(by.css('span.radioElement')), //may need to find a better way to select these radio options
        cancelCTA: element(by.css('span.primaryColour')),
        mathsOptions: element.all(by.css('.applicant-has-maths > section > div')),
        applicantOptions: element.all(by.css('.applicant-highest-qualification-level > section > div')),
        englishOptions: element.all(by.css('.applicant-has-english > section > div')),
        iCTOptions: element.all(by.css('.applicant-has-ict > section > div')),
        studyingOptions: element.all(by.css('.applicant-is-studying > section > div')),
        newSkillsOptions: element.all(by.css('section > div .d-inline-block'))
    };

    public async isOnPage() {
        // Waits for the URL to contain '/candidate-overview' before checking page title
        await WaitFor.urlToContain('/edit/qualifications');
        return (await browser.getTitle()) === "Edit qualifications overview";
    }

    //Applicant Highest Qualifications
    private async clickApplicantQualification(applicantQualification: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.applicantOptions.get(applicantQualification)));
        await this.elements.applicantOptions.get(applicantQualification).click();
    }

    public async app_NoQualifications() {
        await this.clickApplicantQualification(0);
        return this;
    }

    public async app_EntryLevel() {
        await this.clickApplicantQualification(1);
        return this;
    }

    public async app_OtherQualifications() {
        await this.clickApplicantQualification(2);
        return this;
    }

    public async app_Level1() {
        await this.clickApplicantQualification(3);
        return this;
    }

    public async app_Level2() {
        await this.clickApplicantQualification(4);
        return this;
    }

    public async app_Level3() {
        await this.clickApplicantQualification(5);
        return this;
    }

    public async app_Level4() {
        await this.clickApplicantQualification(6);
        return this;
    }

    public async app_Level5() {
        await this.clickApplicantQualification(7);
        return this;
    }

    public async app_Level6() {
        await this.clickApplicantQualification(8);
        return this;
    }

    public async app_Level7() {
        await this.clickApplicantQualification(9);
        return this;
    }

    public async app_OtherQualificationsLevelUnknown() {
        await this.clickApplicantQualification(10);
        return this;
    }

    public async app_NotKnown() {
        await this.clickApplicantQualification(11);
        return this;
    }

    //Maths Qualifcations
    private async clickMathsQualification(mathsQualification: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.mathsOptions.get(mathsQualification)));
        await this.elements.mathsOptions.get(mathsQualification).click();
    }

    public async maths_NotSure() {
        await this.clickMathsQualification(0);
        return this;
    }

    public async maths_Level1() {
        await this.clickMathsQualification(1);
        return this;
    }

    public async maths_Level2() {
        await this.clickMathsQualification(2);
        return this;
    }

    public async maths_NoQualification() {
        await this.clickMathsQualification(3);
        return this;
    }

    //English Qualifications
    private async clickEnglishQualification(englishQualification: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.englishOptions.get(englishQualification)));
        await this.elements.englishOptions.get(englishQualification).click();
    }

    public async eng_NotSure() {
        await this.clickEnglishQualification(0);
        return this;
    }

    public async eng_Level1() {
        await this.clickEnglishQualification(1);
        return this;
    }

    public async eng_Level2() {
        await this.clickEnglishQualification(2);
        return this;
    }

    public async eng_NotQualification() {
        await this.clickEnglishQualification(3);
        return this;
    }

    //ICT Qualifications
    private async clickICTQualification(iCTQualification: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.iCTOptions.get(iCTQualification)));
        await this.elements.iCTOptions.get(iCTQualification).click();
    }

    public async iCT_NotSure() {
        await this.clickICTQualification(0);
        return this;
    }

    public async iCT_Level1() {
        await this.clickICTQualification(1);
        return this;
    }

    public async iCT_Level2() {
        await this.clickICTQualification(2);
        return this;
    }

    public async iCT_NoQualification() {
        await this.clickICTQualification(3);
        return this;
    }

    //Studying at the momement? options
    private async clickStudyingOption(option: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.studyingOptions.get(option)));
        await this.elements.studyingOptions.get(option).click();
    }

    public async study_NotSure() {
        await this.clickStudyingOption(0);
        return this;
    }

    public async study_NotCurrentlyStudying() {
        await this.clickStudyingOption(1);
        return this;
    }

    public async study_CurrentlyStudying() {
        await this.clickStudyingOption(2);
        return this;
    }

    public async newSkills_Yes() {
        await this.clickStudyingOption(0);
        return this;
    }

    public async newSKills_No() {
        await this.clickStudyingOption(1);
        return this;
    }

    public async clickSave() {
        await WaitFor.urlToNotContain('/edit/qualifications');
    }

    //cancelCTA:
    public async clickCancel() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.cancelCTA), 10000);
        await this.elements.cancelCTA.click();
        await WaitFor.urlToNotContain('/edit/qualifications');
    }
}
