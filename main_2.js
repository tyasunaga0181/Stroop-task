var informedConsent_1 = {
  type: 'html-button-response',
  stimulus:
      '<span style = "font-size: 16pt"><b>以下の内容をよく読んで、理解した上で実験参加に同意いただける方は次のページのチェックボックスにチェックをお願いします。同意されない方は、ウィンドウを閉じてください。</b></span>'+
      '<div style = "font-size: 16pt; text-align: left;"><p>この度は本実験に参加していただき、誠にありがとうございます。参加にあたり、以下の説明をお読みください。</p>' +
      '<p><b>1．研究目的</b>' +
      '<br>本研究は、環境が課題成績に与える影響について調査することを目的としております。</p>' +
      '<p><b>2．研究内容</b>' +
      '<br>本研究では、音楽を聴取しながら課題を行っていただき、その後簡単な質問紙に答えていただきます。課題の実行と質問紙は合わせて15分程度で終了します。なお、これから行う質問紙や課題は、あなた個人の性格や能力を個別に評価することを目的とはしておりません。</p>' +
      '<p><b>3.本実験に取り組む環境について</b>' +
    　'<br>本実験はスマートフォンでは実施できません。必ずPCで行うようにしてください。また、ヘッドホンかイヤホンを着用して課題に取り組んでください。課題の途中でウィンドウを閉じたり「戻る」を押すと回答が保存されませんのでお気を付けください。F11キーを押し指示があるまで全画面表示で本実験を進めてください。</p></div>',
  choices: '次',
};

var informedConsent_2 = {
  type: 'survey-multi-select',
  questions:[{
    prompt:
      '<div style = "font-size: 16pt; text-align: left;"><p><b>3．危険性ならびに不利益</b>' +
      '<br>質問紙への回答や課題中、もし不快感を感じることがあったら、ご自身の意志で研究参加をいつでも中止することができます。参加の中止はいつ、いかなる理由でも可能です。また、参加の中止、不参加に伴う不利益は一切生じません。</p>' +
      '<p><b>4．参加者の権利</b>' +
      '<br>本研究の参加は皆様の自由意志によるものです。本研究に参加することに同意しても、それはいつでも撤回することができます。同意を撤回しても、いかなる不利益を受けることはありません。参加に同意した後に、参加途中で撤回する場合は、そのままウェブブラウザを閉じていただけると同意撤回したとみなします。参加途中で参加を撤回された場合は、そのデータをその後の研究で使用いたしません。また、最後まで参加したもののご自身の研究データを研究に使用してほしくない場合は、以下の連絡先にその旨をご連絡いただければ、その後の研究でそのデータを使用いたしません。</p>' +
      '<p><b>5.研究結果の使用およびプライバシーの保護</b>' +
      '<br>参加された方の質問紙への回答や課題への反応は全て匿名で扱われ、データからあなたが特定されることはありません。本研究の結果は、学術論文や学会発表などを通じて公表される可能性があります。ただし、その際も統計的に処理した結果のみが公表されるため、特定の個人に焦点を当てた発表は行いません。</p>' +
      '<p><b>6.研究に関する問い合わせ先</b>' +
      '<br>研究責任者: 及川 昌典(同志社大学心理学部教授) Email: moikawa@mail.doshisha.ac.jp' +
      '<br>研究実施者: 安永 俊樹, 西村 知華, 上田 颯都(同志社大学及川ゼミ) Email: cgvb0181@mail2.doshisha.ac.jp</p></div>'+
    　'<p>以上の内容に同意していただける方はチェックボックスにチェックをして「次へ」を押してください。</p>',
      columns: 10,
      required: true,
      name: 'approval',
  options: ['<span style = "font-size: 14pt">説明事項をよく読み，理解した上で，研究参加に同意します。</span>']
  }],
      button_label: '次へ',
};

var PC_check = {
  type: 'survey-multi-select',
  questions: [
    　{prompt:'<p>本実験はスマートフォンでは実施できません。必ずPCで行うようにしてください。PCで行っている場合はチェックをお願いします。</p>',
      options: ['<span style = "font-size: 14pt">私はPCで本実験に参加しています。</span>'],
      required: true,
      name: 'approval_1'
  }],
  button_label: '次へ'
};

var half_check = {
  type: 'survey-text',
  questions: [
    　{prompt:'<p>この後いくつかデータを入力していただきます。その際<b>半角入力でデータを入力するようお願いします</b>半角入力になっているかを確認してyesと入力して次へ進んでください。</p>', columns: 3,
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
    {prompt: '<p>学籍番号を入力してください</p>', columns: 10, required: true, name: 'participantID'},
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
          "<p style = 'text-align:left'>この課題では、以下のような色のついた単語を見てもらいます</p>"+
          "<p style='color:red;font-size:80pt;'>あお</p>" +
          "<p style = 'text-align:left'>単語の意味は無視して、それぞれの単語の「色」を以下のキーボードを押して回答してください</p>"+
          "<p style = 'text-align:left'>・<span style = 'color:red'>あか</span>の単語ならRを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color:blue'>あお</span>の単語ならBを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color:green'>みどり</span>の単語ならGを押す</p>" +
          "<p style = 'text-align:left'>・<span style = 'color:yellow'>きいろ</span>の単語ならYを押す</p>" +
          "<p style = 'text-align:left'>上の例の場合だと、赤色で「あお」と書いてありますので、Rを押してください</p>"+
          "<p style = 'text-align:left'>また本課題中は左手中指をR、人差し指をG、右手中指をY、人差し指をBの位置にそれぞれ配置して対応するキーボードを押してください。</p>"+
          "<p style = 'text-align:left'>「R,G,Y,B」のいずれかのキーを押すと次に進みます。</p>",
choices: [82, 66, 89, 71],
};

var instructions_2 = {
type: 'html-keyboard-response',
  stimulus: "<p style = 'text-align:left'>また、課題中は色のついた文字を表示していない間画面中央に</p>" +
  　　　　　 '<div style="font-size:60px;">+</div>'+
            "<p style = 'text-align:left'>上記のような十字が表示されます。課題中はこの十字を視界の中心で捉えるようにしてください。</p>"+
            "<p style = 'text-align:left'>「R,G,Y,B」のいずれかのキーを押すと課題の練習が開始されます。</p>" ,
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
            "<p style = 'text-align:left'>「R,G,Y,B」のいずれかのキーを押して課題を始めてください。</p>",
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
  type: 'html-keyboard-response',
  stimulus: "<p style = 'text-align:left'>以上で課題は終了です。</p>" +
          "<p style = 'text-align:left'>続いて質問紙に回答していただきます。</p>" +
           "<p style = 'text-align:left'>ヘッドホン,イヤホンを外して下さい。</p>" +
          "<p style = 'text-align:left'>ヘッドホン,イヤホンを外したら「R,G,Y,B」のいずれかのキーを押し、質問紙の回答に進んでください。</p>",
choices: [82, 66, 89, 71],
};

var scale_1 = ["全く<br>当てはまらない", "かなり<br>当てはまらない", "やや<br>当てはまらない", "どちらでもない", "やや<br>当てはまる", "かなり<br>当てはまる", "非常に<br>当てはまる"];

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
          "<p style = 'text-align:left'><b>1,右クリックで「すべて選択」を選択する。WindowsのPCではCtrlキー+A,MacのPCではCommandキー+Aの同時押しでもすべて選択ができます。ドラッグですべて選択することも可能です。</b></p>"+
          "<p style = 'text-align:left'><b>2,もう一度右クリックをして「コピー」を選択する。</b></p>"+
          "<p style = 'text-align:left'><b>3,メールを開き,e-classに記載した実験責任者のメールアドレス(cgvb0181@mail2.doshisha.ac.jp)に、右クリックで「貼り付け」を選択してコピーした内容をすべて本文に貼り付けて送信する。</b></p>"+
  　　　　 "<p style = 'text-align:left'>以上の1～3の手順で実験責任者のメールアドレスに必ず送信してください。</p>"+
  　　　　 "<p style = 'text-align:left'>なお、<b>連絡がなかった場合参加点を付与することができませんので必ずメールを送っていただきますようよろしくお願いします。</b></p>"+
  　　　　 "<p style = 'text-align:left'>次のページに進むとこのページに戻ることはできません。手順が不安な方は写真やスクリーンショットを撮ってこの画面を記録しておくようにしてください。</p>"+
          "<p style = 'text-align:left'>メールの送信をもって実験終了となりますので、メールを送信された方はEscキーを押して全画面表示を終了しウィンドウを閉じていただいて構いません。</p>"+
          "<p style = 'text-align:left'>本日は実験に参加していただきありがとうございました。</p>",
  choices: '次',
         };

var timeline = [];
timeline.push(informedConsent_1);
timeline.push(informedConsent_2);
timeline.push(PC_check);
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
timeline.push(questionnaire_5);
timeline.push(finish);
