Qualtrics.SurveyEngine.addOnload(function () {

    /*Place your JavaScript here to run when the page loads*/

    /* Change 1: Hiding the Next button */
    // Retrieve Qualtrics object and save in qthis
    var qthis = this;

    // Hide buttons
    qthis.hideNextButton();

    /* Change 2: Defining and load required resources */
    var task_github = "https://yassu0417.github.io/Stoop-task/";
    // https://<GitHubのユーザー名>.github.io/<レポジトリ名>/

    var requiredResources = [
        task_github + "jspsych-6.1.0/jspsych.js",
        task_github + "jspsych-6.1.0/plugins/jspsych-html-keyboard-response.js",
        task_github + "jspsych-6.1.0/plugins/jspsych-survey-multi-select.js",
        task_github + "main.js"
        task_github + "jspsych-6.1.0/plugins/jspsych-survey-text.js"
        task_github + "jspsych-6.1.0/plugins/jspsych-fullscreen.js"
        task_github + "jspsych-6.1.0/plugins/jspsych-survey-multi-choice.js"
        task_github + "jspsych-6.1.0/plugins/jspsych-survey-likert.js"
    ];

    function loadScript(idx) {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if ((idx + 1) < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp();
            }
        });
    }

    if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
        loadScript(0);
    }

    /* Change 3: Appending the display_stage Div using jQuery */
    // jQuery is loaded in Qualtrics by default
    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');

    function initExp() {
  jsPsych.init({
      timeline: timeline,
      display_element: 'display_stage',
      on_finish: function (data) {

            var datajs = jsPsych.data.get().json();
          
          Qualtrics.SurveyEngine.setEmbeddedData("datajs", datajs);
  
          jQuery('display_stage').remove();
          jQuery('display_stage_background').remove();
  
          qthis.clickNextButton();
      };
  });
};
});    

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});
