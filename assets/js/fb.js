// const gcloud = require('google-cloud')

// const storage = gcloud.storage({
//     projectId: 'magentamusic2020',
//     keyFilename: 'service-account-credentials.json',
// });

// const bucket = storage.bucket('magentamusic2020.appspot.com')

//var storage = require('@google-cloud/storage')

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// // 1
// const storageService = firebase.storage();
// const storageRef = storageService.ref();

// 2
//document.querySelector('.file-select).addEventListener('change', handleFileUploadChange);
//document.querySelector('.file-submit).addEventListener('click', handleFileUploadSubmit);
// const start = () => {
			
//     if (player.isPlaying()) {
//         player.stop();
//         return;
//     }
    
//     const furelise = mm.midi_io.urlToNoteSequence("https://jazz-soft.net/demo/midi/furelise.mid");
//     // The model expects a quantized sequence, and ours was unquantized:
//     const qns = mm.sequences.quantizeNoteSequence(TWINKLE_TWINKLE, 4);
//     //const qns = mm.sequences.quantizeNoteSequence(furelise, 4);
    
//     music_rnn
//     .continueSequence(qns, rnn_steps, rnn_temperature)
//     .then((sample) => player.start(sample));
        
//     //player.start(TWINKLE_TWINKLE);
        
//     };