import React, { useState, useRef, useEffect } from 'react';

const YogaFitnessPage = () => {
  // Example video URLs
  const poseTypes = [
    { name: 'Standing Yoga Poses', video: '/standing.mp4' },
    { name: 'Twisting Yoga Poses', video: '/twisting pose.mp4' },
    { name: 'Forward Bend Yoga Poses', video: '/forward-bend.mp4' },
  ];

  const posesByAnatomy = [
    { name: 'Yoga Poses For Your Knees', video: '/for knees.mp4' },
    { name: 'Yoga Poses For Your Hips', video: '/for hips.mp4' },
    { name: 'Poses For Your Lower Back', video: '/for lower back.mp4' },
  ];

  const posesByBenefit = [
    { name: 'Yoga Poses For Anxiety', video: '/for anxiety.mp4' },
    { name: 'Yoga Poses For Digestion', video: '/for digestion.mp4' },
    { name: 'Yoga Poses For Insomnia', video: '/for insomnia.mp4' },
  ];

  const sleepPoses = [
    { name: 'Legs Up The Wall', video: '/6603230-uhd_2160_3840_30fps.mp4' },
    { name: 'Child\'s Pose', video: "/child's pose.mp4" },
    { name: 'Corpse Pose', video: '/corpse pose.mp4' },
    { name: 'Reclining Bound Angle Pose', video: '/recling bound angle.mp4' },
    { name: 'Forward Fold', video: '/forward pose.mp4' },
    { name: 'Cat-Cow Pose', video: '/catcow.mp4' },
  ];

  const VideoComponent = ({ videoSrc, poseName }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); // Default to playing

    useEffect(() => {
      // Auto-play the video on mount
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);

    const togglePlayPause = () => {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    return (
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-48 object-cover"
          controls={false}
          muted // Add muted to prevent autoplay being blocked by the browser
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="p-4">
          <h4 className="text-lg font-semibold">{poseName}</h4>
          <button
            onClick={togglePlayPause}
            className="bg-purple-600 text-white py-1 px-3 rounded mt-2"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-purple-700 bg-opacity-50 p-4">
        <h1 className="text-white text-2xl font-bold">Yoga & Fitness</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Yoga Poses</h2>
        <p className="text-center mb-8 text-gray-600">
          Browse our extensive asana library with a vast collection of yoga poses, from beginner to advanced, including
          seated and standing poses, twists, poses for specific health benefits, and more.
        </p>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Poses by Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {poseTypes.map((pose, index) => (
              <VideoComponent key={index} videoSrc={pose.video} poseName={pose.name} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Poses by Anatomy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posesByAnatomy.map((pose, index) => (
              <VideoComponent key={index} videoSrc={pose.video} poseName={pose.name} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Poses by Benefit</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posesByBenefit.map((pose, index) => (
              <VideoComponent key={index} videoSrc={pose.video} poseName={pose.name} />
            ))}
          </div>
        </section>

        <section className="bg-pink-100 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">6 Yoga Poses That Will Improve Your Sleep</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sleepPoses.map((pose, index) => (
              <VideoComponent key={index} videoSrc={pose.video} poseName={pose.name} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default YogaFitnessPage;
