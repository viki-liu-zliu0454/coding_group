# viki_zliu0454_9103_Major project

## Pacita Abad Wheels of fortune----------  Group work
![An image of 'Wheels of Fortune'](./Final_Group%20Code/Final_Group%20Code/ReadMe/Pacita_Abad_Wheels_of_fortune.jpg) ![An image of 'Group work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/Group.png) 
## My work
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/galaxies.png) ![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/galaxies-2.png)  
## Instructions for Interacting with the Work
I chose an interactive approach that uses the volume and frequency information of audio to dynamically display animation effects. By clicking the screen, music playback is initiated, and as the rhythm progresses, the visuals change in real-time according to the audio's volume and frequency, syncing perfectly with the music. Clicking again will pause both the music and animation. There will also be a prompt on the screen to guide users to easily control the interaction between music and animation with a simple tap, creating an immersive experience that blends sight and sound.

In this way, the piece is not just a visual presentation but also a visualization of the music. Every note transforms into a flowing image, creating a unique artistic atmosphere, allowing music to be not only heard but also seen, delivering a more creative artistic experience.

## Animation Implementation Method
In my work, I use the p5.FFT() and p5.Amplitude() methods in p5.js for real-time audio analysis, utilizing volume and frequency data to drive animations and create dynamic visual effects.

My design includes multiple layers of dynamic rings, animated stars, and meteor trails. The different rings respond to the audio waveform and volume data in size, rotation angle, and shape, generating varied visual effects that align with the rhythm and frequency changes in the music. The rings expand outward from the center, exhibiting a “breathing” effect through subtle scaling. The open circular rings produce slight waves and scaling in response to the music. The main outer frame, in light gray, creates an effect resembling sound waves or ripples, while the particle-like dot patterns and variations in transparency add rhythmic movement and spatial depth, resulting in a lively and layered three-dimensional effect.

Meteors appear randomly in the background, adding vibrancy and dynamism to the scene. I also included background gradients, waveform spectrum bars, and translucent white gradient circles to enhance the atmosphere of a deep night sky. This design goes beyond a simple mapping of audio data by using a layered composition that seamlessly integrates the visuals with the music, delivering a lively and artistically rich dynamic experience.

## Animation Properties and Uniqueness
["FFT Link"](https://archive.p5js.org/reference/#/p5.FFT)  
In this animation, the audio and visual effects are tightly synchronized. I used audio volume and frequency data as the core driving force for the animation. By utilizing p5.js's p5.FFT() and p5.Amplitude() methods, I can retrieve real-time waveform and volume data from the music, mapping this data to multiple visual elements in the animation. The size, rotation angle, and details of the dynamic rings change with the audio fluctuations, allowing the animation to respond to the rhythm and frequency of the music in real time, creating an immersive experience that aligns closely with the music. This dynamic quality not only enriches the visual appeal but also makes the audience feel as if they are "seeing" the rhythm of the music.  
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/audio_visualization_p5_fft_amplitude.png) 