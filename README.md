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

***Code Implementation:***  
In the draw() function, audio data is retrieved using p5.FFT() and p5.Amplitude(). The waveform data is accessed through the waveform variable, and the volume data through the rms variable.  
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/audio_visualization_p5_fft_amplitude.png)  
***Explanation:***  
The data from waveform and rms is used to control the size, rotation angle, and overall visual dynamics of the dynamic rings, ensuring that the animation stays synchronized with the rhythm of the music.  
## Colors
I chose soft, cool tones as the primary colors, such as light blue, pale yellow, and white, contrasting with the dark gradient background. These colors give the scene a tranquil, night-sky feel, while adding a dreamy effect to the meteors, rings, and stars. Each ring displays a different color combination depending on its layer, adding depth to the overall scene without making it appear monotonous.  
***Code Implementation:***  
In the Circle class and waveformBar() function, soft, cool tones like light blue, pale yellow, and white are specified.  
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/color_adjustments.png)  

## Opacity  
Opacity is a key element I use to enhance visual hierarchy and spatiality. In the design of the circle and the shooting star, I set a gradient opacity so that they are more defined in the centre part and gradually fade out at the edges. This translucent effect gives the rings a softer look and a sense of invisibility. In addition, the tails of the meteors are fading away, which is very psychedelic and unrealistic.  
***Code Implementation:***  
In the drawWhiteCircle() function, gradient opacity is used to draw the ring boundaries, and in the Star and Meteor classes, a gradient is applied to the tails of the meteors.  
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/opacity_adjustments.png)  

## Multi-layered Dynamic Rings 
The body of the animation is a number of multi-layered dynamic circles. Each ring is made up of different types of particles that expand, contract and rotate slightly as the audio changes. This design adds variety to the form and movement of each ring, creating a sense of flow, as if the whole image is ‘breathing’, as if in a dream or memory. The transparency, size and rotation of each particle is adjusted in real time according to the audio, creating a three-dimensional and rhythmic visual effect.  
***Code Implementation:***  
In the Circle class, multi-layered dynamic rings are created, with each layer composed of different particles. The opacity and size of the particles change in real-time based on the audio data.  
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/concise_circle_class_code.png)  

## Dynamic Spatial Depth of Stars and Meteors
In the background, I designed static stars and dynamic meteors. The stars remain static, forming a stable background of the night sky, while the meteors appear randomly with a certain probability, crossing from different directions in the picture, increasing the dynamic spatial hierarchy of the picture. The speed, trajectory and transparency of the meteors are also adjusted to make them look natural and dynamic, as if they were in an active cosmic scene. This combination of elements not only enriches the image, but also adds a mysterious atmosphere to the whole animation. 
***Code Implementation:***  
The Star and Meteor classes are used to create static stars and dynamic meteors respectively. The stars remain static, while the meteors are randomly generated and move.  
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/star_and_meteor_classes.png)  

## Gradient Background and Halo Effect
I designed a gradient background from black to deep blue and added a translucent white halo effect around the circle. The background gradient creates a sense of depth in the night sky, while the halo provides a visually soft transition to the dynamic circle, enhancing the layered feel of the animation. This combination of background and halo not only adds visual aesthetics, but also gives the viewer a sense of deep serenity, as if they are in the universe, with shooting stars and starry sky. 
***Code Implementation:***  
A background gradient is implemented in the draw() function, and a translucent halo is added to the dynamic circle using the drawWhiteCircle() function.
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/gradient_and_glow_effect.png)  

## Audio-driven waveform spectral bars
At the top and bottom of the screen, I added spectral bars based on the audio waveform. The colour of the spectral bar fades from white to light blue, rising and falling in response to audio fluctuations. This design echoes the main screen, which visually enriches the layers and further enhances the synchronisation between the audio and the visuals.  
***Code Implementation:***  
The waveformBar() function draws a spectral bar based on the audio waveform at the top and bottom of the screen.  
![An image of 'my work'](./Final_Group%20Code/Final_Group%20Code/ReadMe/waveform_spectrum_bars.png)  

## Uniqueness  
I believe the uniqueness of my animation lies in the overall visual presentation. It goes beyond simple audio data visualization by integrating visual elements with the dynamics of the music to create a sense of “rhythm.” Every element—whether rings, stars, meteors, or spectrum bars—responds to the changes in the music. The audio-driven pulsation and rotation of the rings intertwine the visuals with the music, making it feel as if the music is flowing within the scene. Additionally, the randomness of the meteors and the static starry background contribute to the night sky ambiance, providing viewers with an immersive experience that feels dreamlike.  

## Inspirational References
["Inspiration Link: 'Universe'](https://www.youtube.com/watch?v=ztVV54sPOns)  
*"Below are screenshots I captured from the video."*  
![An image of 'Universe'](./Final_Group%20Code/Final_Group%20Code/ReadMe/Universe-1.png) ![An image of 'Universe'](./Final_Group%20Code/Final_Group%20Code/ReadMe/Universe-2.png) ![An image of 'Universe'](./Final_Group%20Code/Final_Group%20Code/ReadMe/Universe-3.png)  

My work is inspired by an exploration of the universe and memories, an inspiration that blends the visual character of deep space imagery with a sense of the passage of time and space. Images showing vast, mysterious scenes of nebulae and planets inform my designs with regard to spatiality and colour palette. These cosmic elements are not only visually appealing, but also convey a sense of serenity and nostalgia that transcends time. In my work (third image), I translate these inspirations into dynamic audio-driven visuals. Through continuous design, I hope to not only see the beauty of the universe, but also feel an atmosphere of reminiscence through the dynamic changes - like being in a dreamy universe, hearing and seeing time flow through the images.  

## Technical Explanation of Code
['Technical Link'](https://archive.p5js.org/reference/#/p5.FFT) 
- p5.FFT(): This is a Fourier Transform tool provided by p5.js for analyzing the frequency content and waveform data of audio. In the code, fft.waveform() is used to obtain the current audio waveform data, which is stored in the waveform array. This array contains a set of real-time updated audio amplitude values that can be used to create dynamic visual effects in response to the music.
***How it works:*** 
- p5.FFT() uses the Fast Fourier Transform algorithm to decompose the audio signal into a series of frequency components. The amplitude or “energy” of each component is updated in waveform, representing the real-time fluctuation of the audio signal.
Application: The waveform data is mapped to visual effects using the map() function. For example, in dynamic rings and spectrum bars, these values control size, opacity, scaling, and even rotation speed, making the visual effects change in real-time with the rhythm of the music.
- p5.Amplitude(): This is a simple volume analysis tool used to obtain the overall volume level (RMS) of the audio. analyser.getLevel() returns the real-time volume value, which is assigned to the rms variable. The rms value further controls the overall dynamics of the animation, such as the rotation speed and size variation of the rings.
***How it works:***
- p5.Amplitude analyzes the average volume of the audio and returns a value between 0 and 1, representing the relative size of the current volume.
Application: In the code, rms is used to control the size of the rings (scale(rms)) and the rotation angle (arcAng += rms * 10), giving the animation a rhythmic, dynamic effect in line with the music.

## Code Modifications for the Team Project 
**Integration of Audio-Driven p5.FFT()**  
<u>**Modification:**</u>  
Added audio analysis functionality using p5.FFT() and p5.Amplitude() in the team’s base code to obtain real-time frequency and volume data.  

<u>**Reason:**</u> 
To create a dynamic playback effect of “memories” through music, real-time audio data was needed to drive visual changes, allowing the visuals to pulsate with the rhythm of the music and create an immersive experience.

<u>**Effect:**</u>  
The animation now changes in real time with the audio fluctuations. This, combined with the cosmic theme, merges the fragmentary nature of memories with the fluidity of the universe, allowing viewers to feel memories flickering and emerging like stars in the cosmos.

**Addition of Dynamic Rings and Particle System**  
<u>**Modification:**</u>   
Added initialization and distribution code for multiple dynamic rings in the setup() function, creating a multi-layered dynamic ring system through the Circle class.  

<u>**Reason:**</u>   
To evoke the depth and mystery of the universe, where the dynamic rings resemble planetary orbits, and the particle system simulates a galaxy structure, adding a sense of flow that symbolizes countless shimmering fragments of memories.  

<u>**Effect:**</u>  
The dynamic rings and particle system expand and rotate with the audio rhythm, creating a deep starry effect in the cosmic background, presenting a layered, resonant “sea of memories” image.  

**Responsive Scaling with Window Resizing**  
<u>**Modification:**</u>  
Added a scaling factor, scaleFactor, in the windowResized() function to ensure that the animation adjusts with window size changes, maintaining visual consistency.  

<u>**Reason:**</u>   
To adapt to screens of different sizes, ensuring that viewers can fully experience the animation’s cosmic depth and memory fragments regardless of the device used.  

<u>**Effect:**</u>  
The animation automatically resizes when the screen size changes, allowing viewers to enjoy an immersive cosmic experience on any device.  

**Gradient Background and Halo Effect**  
<u>**Modification:**</u>   
Added a gradient background from black to deep blue and a soft halo effect around the dynamic rings in the draw() function.

<u>**Reason:**</u>  
The deep night sky background supports the cosmic theme, while the halo symbolizes the softness and blur of memories, making them appear within the vast universe.

<u>**Effect:**</u>  
The gradient background simulates the depth of the universe, while the halo adds gentle lighting to the memories, like stars flickering in deep memories, enhancing the emotional expression of the visuals.

**Images Surrounding Dynamic Rings**  
<u>**Modification:**</u>  
Added a drawImagesAroundCircle() function to draw images around the rings, creating a visual effect of celestial bodies in orbit.

<u>**Reason:**</u>   
By adding static hologram images as celestial bodies, the rings are crafted to resemble planetary orbits combined with fragments of memories, enhancing the atmosphere of the cosmos and memories.  

<u>**Effect:**</u>  
The effect of celestial bodies orbiting the dynamic rings simulates the orbital structure of a cosmic system, and combined with the hazy effect of holograms, it better represents memories flickering in the universe, strengthening the emotional resonance of “cosmos and memories.”
These modifications combine dynamic rings, audio-driven oscillations, gradient backgrounds, and soft halo effects to perfectly blend the vastness of the cosmos with the fragmented nature of memories, making the entire animation visually deeper and more aligned with the theme of “cosmos and memories.”