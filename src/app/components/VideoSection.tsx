import { Play } from 'lucide-react';
import videoThumbnail from 'figma:asset/24b41206241245089aaeb9851e9951a764cdb14c.png';

export function VideoSection() {
  const handlePlayVideo = () => {
    // Open YouTube video or play embedded video
    window.open('https://www.youtube.com/watch?v=YOUR_VIDEO_ID', '_blank');
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={videoThumbnail}
          alt="Hong Kong Video Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container - Invisible overlay for click */}
      <div className="relative h-full flex items-center justify-center">
        <button 
          onClick={handlePlayVideo}
          className="absolute inset-0 w-full h-full cursor-pointer group"
          aria-label="Play video about Hong Kong"
        >
          <span className="sr-only">Play video</span>
        </button>
      </div>
    </div>
  );
}