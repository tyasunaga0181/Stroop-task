var informedConsent_1 = {
  type: 'html-button-response',
  stimulus:
      '<span style = "font-size: 16pt"><b>以下の内容をよく読んで、理解した上で実験参加に同意いただける方は次のページのチェックボックスにチェックをお願いします。同意されない方は、ウィンドウを閉じてください。</b></span>'+
      '<div style = "font-size: 16pt; text-align: left;"><p>この度は本実験に参加していただき、誠にありがとうございます。参加にあたり、以下の説明をお読みください。</p>' +
      '<p><br>本研究の目的は、環境が課題成績に与える影響について調査することです。'+
      '<br>PCで課題を行なった後、アンケートに答えていただきます。実験は全体で15分程度で終了します。本実験は、スマートフォンやタブレットではなく、必ずPCで行ってください。また、ヘッドホンかイヤホンを着用して課題に取り組んでください。課題の途中でウィンドウを閉じたり、「戻る」を押したりしないでください。</p></div>',
      choices: '次',
};

var informedConsent_2 = {
  type: 'survey-multi-select',
  questions:[{
    prompt:
      '<div style = "font-size: 16pt; text-align: left;"><p>実験への参加は、あくまでも任意です。参加中いつでも、ご自身の意志で自由に参加を中止することができます。本研究に参加することに同意しても、いつでも撤回することができます。途中でブラウザを閉じていただければ、参加への同意を撤回したものとみなします。不参加や参加の中止によって、不利益が生じることはありません。また、最後まで参加したものの、ご自身のデータを研究に使用してほしくないという場合は、学期中にその旨をご連絡ください。</p>'+
      '<br>実験データは、匿名で統計的に処理されます。学術論文や学会発表で公表される可能性がありますが、データから個人が特定されることはありません。</p>' +
      '<p><b>研究に関する問い合わせ先</b>' +
      '<br> 研究についてご不明な点がありましたら、研究実施者までお問い合わせください'+
      '<br>研究責任者: 及川 昌典(同志社大学心理学部教授) Email: moikawa@mail.doshisha.ac.jp' +
      '<br>研究実施者: 安永 俊樹, 西村 知華, 上田 颯都(同志社大学及川ゼミ) Email: cgvb0181@mail2.doshisha.ac.jp</p></div>'+
    　'<p>以上の内容に同意していただける方はチェックボックスにチェックして「次へ」を押してください。</p>',
      required: true,
       name: 'approval',
  options: ['<span style = "font-size: 14pt">説明事項をよく読み，理解した上で，研究参加に同意します。</span>']
  }],
      button_label: '次へ',
};

var half_check = {
  type: 'survey-text',
  questions: [
    　{prompt:'<p>本実験は、スマートフォンやタブレットではなく、必ずPCで行ってください。また、<b>半角入力でデータを入力するようお願いします</b>半角入力になっているかを確認するためyesと入力して次へ進んでください。</p>', columns: 3,
      required: true,
      name: 'approval_2'
  }],
  button_label: '次へ'
};

var fullscreen = {
  type: 'fullscreen',
  message: "<p style = 'text-align:left'>以下のボタンをクリックすると，画面は全画面表示に切り替わります。</p>" +
           "<p style = 'text-align:left'>指示があるまで全画面表示をやめないようにしてください。</p>",
  button_label: "全画面表示に切り替え",
  fullscreen_mode: true
};

var par_id = {
  type: 'survey-text',
  questions: [
    {prompt: '<p>学籍番号を入力してください(参加の確認のために使用されます。)</p>', columns: 10, required: true, name: 'participantID'},
  ],
  button_label: '次へ',
  on_finish: function(data) {
    data.id = JSON.parse(data.responses).participantID // 一時保存
  }
};

var age = {
  type: 'survey-text',
  questions: [
    {prompt: '<p>年齢を入力してください。答えたくない場合は0と入力してください。</p>', columns: 3, required: true, name: 'age'},
  ],
  button_label: '次へ',
  on_finish: function(data) {
    data.age = JSON.parse(data.responses).age // 一時保存
  }
};

var gender = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "<p>性別を選択してください</p>", options: ['男性', '女性', '答えたくない'], required: true, horizontal: true, name: 'gender'},
  ],
  button_label: '次へ',
  on_finish: function(data) {
    data.gender = JSON.parse(data.responses).gender // 一時保存
  }
};

var instructions = {
type: 'html-keyboard-response',
stimulus: "<p style = 'text-align:left'>これから課題を行ってもらいます</p>" +
          "<p style = 'text-align:left'>画面中央に以下のような色のついた単語が表示されます</p>"+
          "<p style='color:red;font-size:80pt;'>あお</p>" +
          "<p style = 'text-align:left'>単語の意味は無視して、それぞれの単語の「色」を以下のキーボードを押して回答してください</p>"+
          "<p style = 'text-align:left'>・<span style = 'color:red'>あか</span>の単語ならRを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color:blue'>あお</span>の単語ならBを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color:green'>みどり</span>の単語ならGを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color:yellow'>きいろ</span>の単語ならYを押す</p>" +
          "<p style = 'text-align:left'>上の例の場合だと、赤色で「あお」と書いてありますので、Rを押してください</p>"+
          "<p style = 'text-align:left'><br>また本課題中は左手中指をR、人差し指をG、右手中指をY、人差し指をBの位置に置いてください。</p>"+
 　　　　  "<p style = 'text-align:left'>単語が表示されたら、できるだけ素早く、かつ正確に反応してください</p>" +
          "<p style = 'text-align:left'>「R,G,Y,B」のいずれかのキーを押すと次に進みます。</p>",
choices: [82, 66, 89, 71],

};

var instructions_2 = {
type: 'html-keyboard-response',
  stimulus: "<p style = 'text-align:left'>課題中は、画面中央を、視野の中心で捉えるようにしてください。</p>"+
            "<p style = 'text-align:left'>単語が表示されたら、できるだけ素早く、かつ正確に反応してください</p>" +
            "<p style = 'text-align:left'>「R,G,Y,B」のいずれかのキーを押すと課題の練習が開始されます。</p>",
choices: [82, 66, 89, 71],
post_trial_gap:1000,
};
  
var stimuli = [
 {
   stimulus: "<p style='color:red;font-size:80pt;'>あか</p>",
   data: { no:'1', stim_type: 'congruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>あか</p>",
   data: { no:'2', stim_type: 'incongruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>あか</p>",
   data: { no:'3', stim_type: 'incongruent', correct_key_press: '66'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>あか</p>",
   data: { no:'4', stim_type: 'incongruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>みどり</p>",
   data: { no:'5', stim_type: 'congruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:red;font-size:80pt;'>みどり</p>" ,
   data: { no:'6', stim_type: 'incongruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>みどり</p>",
   data: { no:'7', stim_type: 'incongruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>みどり</p>",
   data: { no:'8', stim_type: 'incongruent', correct_key_press: '66'}
 },
 {
   stimulus: "<p style='color:red;font-size:80pt;'>き</p>",
   data: { no:'9', stim_type: 'incongruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>き</p>",
   data: { no:'10', stim_type: 'incongruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>き</p>",
   data: { no:'11', stim_type: 'congruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>き</p>",
   data: { no:'12', stim_type: 'incongruent', correct_key_press: '66'}
 },
 {
   stimulus: "<p style='color:red;font-size:80pt;'>あお</p>",
   data: { no:'13', stim_type: 'incongruent', correct_key_press: '82'}
 },
 {
   stimulus: "<p style='color:green;font-size:80pt;'>あお</p>",
   data: { no:'14', stim_type: 'incongruent', correct_key_press: '71'}
 },
 {
   stimulus: "<p style='color:yellow;font-size:80pt;'>あお</p>",
   data: { no:'15', stim_type: 'incongruent', correct_key_press: '89'}
 },
 {
   stimulus: "<p style='color:blue;font-size:80pt;'>あお</p>",
   data: { no:'16', stim_type: 'congruent', correct_key_press: '66'}
 }
];

var fixation = {
 type: 'html-keyboard-response',
 stimulus: '<div style="font-size:60px;">+</div>',
 choices: jsPsych.NO_KEYS,
 trial_duration: 1000,
 post_trial_gap: 500,
};

var pre_stroop = {
  timeline: [{
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'),
  post_trial_gap:500,
  prompt: '<p>赤色ならR,  青色ならB,  緑色ならG,  黄色ならY</p>',
  choices: [82, 66, 89, 71],
  }],
};

var pre_procedure = {
  timeline: [fixation, pre_stroop],
  timeline_variables: stimuli,
  repetitions: 2,
  randomize_order: true
};

var go_main = {
  type: 'html-keyboard-response',
  stimulus: "<p style = 'text-align:left'>練習は以上です。ただいまより本番を行ってもらいます。</p>" +
            "<p style = 'text-align:left'>課題中は、画面中央を視野の中心で捉えるようにしてください。</p>" +
            "<p style = 'text-align:left'>単語が表示されたら、できるだけ素早く、かつ正確に反応してください</p>" +
            "<p style = 'text-align:left'>赤色ならR, 青色ならB, 緑色ならG, 黄色ならYを押します。</p>" +
            "<p style = 'text-align:left'>「R,G,Y,B」のいずれかのキーを押すと本番に進みます。</p>",
choices: [82, 66, 89, 71],
          };

var main_stroop = {
  timeline: [{
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'),
  post_trial_gap:500,
  prompt: '<p>赤色ならR,  青色ならB,  緑色ならG,  黄色ならY</p>',
  choices: [82, 66, 89, 71],
  }],
  data: jsPsych.timelineVariable('data'),
  on_finish: function(data){
    var correct = 0;
    if(data.correct_key_press == data.key_press){
      correct = 1;
    }
    data.correct = correct;
  },
};

var main_procedure = {
  timeline: [fixation, main_stroop],
  timeline_variables: stimuli,
  repetitions: 6,
  randomize_order: true
};

var lead_questionnaire = {
  type: 'html-button-response',
  stimulus: "<p style = 'text-align:left'>以上で課題は終了です。</p>" +
          "<p style = 'text-align:left'>続いて質問紙に回答していただきます。</p>" +
           "<p style = 'text-align:left'>ヘッドホン,イヤホンを外して下さい。</p>" +
          "<p style = 'text-align:left'>ヘッドホン,イヤホンを外したら「次」を押し、質問紙の回答に進んでください。</p>",
  choices: '次',
};

var scale_1 = ["全く<br>当てはまらない", "かなり<br>当てはまらない", "やや<br>当てはまらない", "どちらでもない", "やや<br>当てはまる", "かなり<br>当てはまる", "非常に<br>当てはまる"];

var questionnaire_1 = {
  type: 'survey-likert',
  questions: [
    {prompt: "音楽を聴いていて愉快な気分になった", name: 'feelings_1_1', labels: scale_1, required: true},
    {prompt: "音楽を聴いていて気持ちがよくなった", name: 'feelings_1_2', labels: scale_1, required: true},
    {prompt: "音楽を聴いていて元気が出た", name: 'feelings_1_3', labels: scale_1, required: true},
    {prompt: "音楽を聴いていて騒々しいと感じた", name: 'feelings_1_4', labels: scale_1, required: true},
    {prompt: "音楽を聴いていて疲れた", name: 'feelings_1_5', labels: scale_1, required: true},
    {prompt: "音楽を聴いていて積極的な気分になった", name: 'feelings_1_6', labels: scale_1, required: true},
],
  button_label:'次へ',
  on_finish: function(data) {
  data.questionnaire_1_1 = JSON.parse(data.responses).feelings_1_1,
  data.questionnaire_1_2 = JSON.parse(data.responses).feelings_1_2,
  data.questionnaire_1_3 = JSON.parse(data.responses).feelings_1_3,
  data.questionnaire_1_4 = JSON.parse(data.responses).feelings_1_4,
  data.questionnaire_1_5 = JSON.parse(data.responses).feelings_1_5,
  data.questionnaire_1_6 = JSON.parse(data.responses).feelings_1_6
  }
};

var  questionnaire_2 = {
 type: 'survey-likert',
 questions: [
   {prompt: "音楽を聴いていた時、心地が良かった", name: 'feelings_2_1', labels: scale_1, required: true},
   {prompt: "音楽を聴いていた時、目がさえた", name: 'feelings_2_2', labels: scale_1, required: true},
   {prompt: "音楽を聴いていた時、落ち着いた", name: 'feelings_2_3', labels: scale_1, required: true},
   {prompt: "音楽を聴いていた時、緊張した", name: 'feelings_2_4', labels: scale_1, required: true},
   {prompt: "音楽を聴いていた時、楽だと感じた", name: 'feelings_2_5', labels: scale_1, required: true},
   {prompt: "音楽を聴いていた時、不安を感じた", name: 'feelings_2_6', labels: scale_1, required: true},
],
 button_label:'次へ',
 on_finish: function(data) {
 data.questionnaire_2_1 = JSON.parse(data.responses).feelings_2_1,
 data.questionnaire_2_2 = JSON.parse(data.responses).feelings_2_2,
 data.questionnaire_2_3 = JSON.parse(data.responses).feelings_2_3,
 data.questionnaire_2_4 = JSON.parse(data.responses).feelings_2_4,
 data.questionnaire_2_5 = JSON.parse(data.responses).feelings_2_5,
 data.questionnaire_2_6 = JSON.parse(data.responses).feelings_2_6
  }

};

var  questionnaire_3 = {
 type: 'survey-likert',
 questions: [
   {prompt: "聴取した音楽は好きだった", name: 'feelings_3_1', labels: scale_1, required: true},
   {prompt: "聴取した音楽を遅いと感じた", name: 'feelings_3_2', labels: scale_1, required: true},
],
 button_label:'次へ',
 on_finish: function(data) {
 data.questionnaire_3_1 = JSON.parse(data.responses).feelings_3_1,
 data.questionnaire_3_2 = JSON.parse(data.responses).feelings_3_2
  }

};

var  questionnaire_4 = {
 type: 'survey-likert',
 questions: [
   {prompt: "音楽に明るい印象を持った", name: 'feelings_4_1', labels: scale_1, required: true},
   {prompt: "音楽に悲しい印象を持った", name: 'feelings_4_2', labels: scale_1, required: true},
   {prompt: "音楽に優しい印象を持った", name: 'feelings_4_3', labels: scale_1, required: true},
   {prompt: "音楽に刺激的な印象を持った", name: 'feelings_4_4', labels: scale_1, required: true},
   {prompt: "音楽に浮かれた印象を持った", name: 'feelings_4_5', labels: scale_1, required: true},
   {prompt: "音楽に厳かな印象を持った", name: 'feelings_4_6', labels: scale_1, required: true},
   {prompt: "音楽に楽しい印象を持った", name: 'feelings_4_7', labels: scale_1, required: true},
   {prompt: "音楽に暗い印象を持った", name: 'feelings_4_8', labels: scale_1, required: true},
   {prompt: "音楽に穏やかな印象を持った", name: 'feelings_4_9', labels: scale_1, required: true},
   {prompt: "音楽に強い印象を持った", name: 'feelings_4_10', labels: scale_1, required: true},
   {prompt: "音楽に落ち着きのない印象を持った", name: 'feelings_4_11', labels: scale_1, required: true},
   {prompt: "音楽に気高い印象を持った", name: 'feelings_4_12', labels: scale_1, required: true},
 ],
 button_label:'次へ',
 on_finish: function(data) {
 data.questionnaire_4_1 = JSON.parse(data.responses).feelings_4_1,
 data.questionnaire_4_2 = JSON.parse(data.responses).feelings_4_2,
 data.questionnaire_4_3 = JSON.parse(data.responses).feelings_4_3,
 data.questionnaire_4_4 = JSON.parse(data.responses).feelings_4_4,
 data.questionnaire_4_5 = JSON.parse(data.responses).feelings_4_5,
 data.questionnaire_4_6 = JSON.parse(data.responses).feelings_4_6,
 data.questionnaire_4_7 = JSON.parse(data.responses).feelings_4_7,
 data.questionnaire_4_8 = JSON.parse(data.responses).feelings_4_8,
 data.questionnaire_4_9 = JSON.parse(data.responses).feelings_4_9,
 data.questionnaire_4_10 = JSON.parse(data.responses).feelings_4_10,
 data.questionnaire_4_11 = JSON.parse(data.responses).feelings_4_11,
 data.questionnaire_4_12 = JSON.parse(data.responses).feelings_4_12
  }
};

var　questionnaire_5 = {
 type: 'survey-likert',
 questions: [
   {prompt: "本実験で行った課題は楽しかった", name: 'feelings_5_1', labels: scale_1, required: true},
   {prompt: "本実験で行った課題は長く感じた", name: 'feelings_5_2', labels: scale_1, required: true},
   {prompt: "本実験で行った課題は落ち着いてできた", name: 'feelings_5_3', labels: scale_1, required: true},
   {prompt: "本実験で行った課題は面白かった", name: 'feelings_5_4', labels: scale_1, required: true},
   {prompt: "本実験で行った課題は好きだった", name: 'feelings_5_5', labels: scale_1, required: true},
   {prompt: "本実験で行った課題は集中してできた", name: 'feelings_5_6', labels: scale_1, required: true},
   {prompt: "本実験で行った課題は心地よかった", name: 'feelings_5_7', labels: scale_1, required: true},
   {prompt: "本実験で行った課題は緊張した", name: 'feelings_5_8', labels: scale_1, required: true},
 ],
 button_label:'次へ',
 on_finish: function(data) {
 data.questionnaire_5_1 = JSON.parse(data.responses).feelings_5_1,
 data.questionnaire_5_2 = JSON.parse(data.responses).feelings_5_2,
 data.questionnaire_5_3 = JSON.parse(data.responses).feelings_5_3,
 data.questionnaire_5_4 = JSON.parse(data.responses).feelings_5_4,
 data.questionnaire_5_5 = JSON.parse(data.responses).feelings_5_5,
 data.questionnaire_5_6 = JSON.parse(data.responses).feelings_5_6,
 data.questionnaire_5_7 = JSON.parse(data.responses).feelings_5_7,
 data.questionnaire_5_8 = JSON.parse(data.responses).feelings_5_8
  }
};

var finish = {
 type: 'html-button-response',
 stimulus:"<p style = 'text-align:left'>以上で質問紙は終了です。</p>" +
          "<p style = 'text-align:left'>「次」を押すと画面上に本実験のデータが表示されますので</p>"+
          "<p style = 'text-align:left'>そのデータを</p>"+
          "<p style = 'text-align:left'><b>1,右クリックで「すべて選択」を選択する。WindowsのPCではCtrlキー+A,MacのPCではCommandキー+Aの同時押しでもすべて選択ができます。</b></p>"+
          "<p style = 'text-align:left'><b>2,もう一度右クリックをしてコピーを選択する。</b></p>"+
          "<p style = 'text-align:left'><b>3,メールを開き,e-classに記載した実験責任者のメールアドレス(cgvb0181@mail2.doshisha.ac.jp)に、右クリックで「貼り付け」を選択してコピーした内容をすべて本文に貼り付けて送信する。</b></p>"+
  　　　　 "<p style = 'text-align:left'>以上の1～3の手順で実験責任者のメールアドレスに必ず送信してください。</p>"+
  　　　　 "<p style = 'text-align:left'>なお、<b>送信漏れがあると参加点を付与することができませんので必ず送信するようよろしくお願いします。</b></p>"+
  　　　　 "<p style = 'text-align:left'>次のページに進むとこのページに戻ることはできません。手順が不安な方は写真やスクリーンショットを撮ってこの画面を記録しておくようにしてください。</p>"+
          "<p style = 'text-align:left'>メールの送信をもって実験終了となりますので、メールを送信された方はEscキーを押して全画面表示を終了しウィンドウを閉じていただいて構いません。</p>"+
          "<p style = 'text-align:left'>本日は実験に参加していただきありがとうございました。</p>",
  choices: '次',
         };

var timeline = [];
timeline.push(informedConsent_1);
timeline.push(informedConsent_2);
timeline.push(half_check);
timeline.push(fullscreen);
timeline.push(par_id);
timeline.push(age);
timeline.push(gender);
timeline.push(instructions);
timeline.push(instructions_2);
timeline.push(pre_procedure);
timeline.push(go_main);
timeline.push(main_procedure);
timeline.push(lead_questionnaire);
timeline.push(questionnaire_1);
timeline.push(questionnaire_2);
timeline.push(questionnaire_3);
timeline.push(questionnaire_4);
timeline.push(questionnaire_5);
timeline.push(finish);
