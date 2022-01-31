const axios = require('axios');

function calculateAnswer(url) {
  axios.get(url)
    .then(res => {
      const quiz = res.data['quiz'];
      let count = 0;
      quiz.forEach(q => {
        const options = q.options;
        const answerId = q.answerId;
        options.forEach(option => {
          const answer = option[answerId];
          if (answer && answer.length == 4 && parseInt(answer)) {
            count++;
          }
        });
      });
      console.log('Output: ', count);
      return count;
    });
}

calculateAnswer('https://raw.githubusercontent.com/JuliaBern/taskjson/main/quiz.json');
