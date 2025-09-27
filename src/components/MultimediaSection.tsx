import { useState } from 'react';
import { Play, FileText, Download, Video, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const MultimediaSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaItems = [
    {
      id: 'mission-video',
      type: 'video',
      title: 'Mission Launch Simulation',
      description: 'Watch our detailed mission launch simulation showcasing the complete satellite deployment process',
      thumbnail: '/placeholder.svg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      duration: '5:32',
      category: 'Simulation'
    },
    {
      id: 'technical-doc',
      type: 'document',
      title: 'Technical Specifications',
      description: 'Comprehensive technical documentation covering all subsystems and mission parameters',
      thumbnail: '/placeholder.svg',
      fileSize: '2.5MB',
      pages: 45,
      category: 'Documentation'
    },
    {
      id: 'ground-station',
      type: 'video',
      title: 'Ground Station Operations',
      description: 'Behind-the-scenes look at our ground station operations and communication protocols',
      thumbnail: '/placeholder.svg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      duration: '8:15',
      category: 'Operations'
    },
    {
      id: 'mission-report',
      type: 'document',
      title: 'KLSAT-1U Mission Report',
      description: 'Complete mission report detailing the success and learnings from our first CubeSat mission',
      thumbnail: '/placeholder.svg',
      fileSize: '1.8MB',
      pages: 32,
      category: 'Report'
    },
    {
      id: 'gallery',
      type: 'gallery',
      title: 'Mission Gallery',
      description: 'Photo gallery showcasing satellite assembly, testing, and mission milestones',
      thumbnail: '/placeholder.svg',
      imageCount: 24,
      category: 'Gallery'
    }
  ];

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'document': return FileText;
      case 'gallery': return Image;
      default: return Play;
    }
  };

  const handleMediaClick = (media: any) => {
    if (media.type === 'video') {
      setSelectedMedia(media);
    } else if (media.type === 'document') {
      // In a real implementation, this would open a PDF viewer
      console.log('Opening document:', media.title);
    } else if (media.type === 'gallery') {
      // In a real implementation, this would open a photo gallery
      console.log('Opening gallery:', media.title);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Multimedia
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore our mission through videos, documentation, and interactive content 
            showcasing the journey of KLSAT satellite development
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((media, index) => {
            const MediaIcon = getMediaIcon(media.type);
            return (
              <Card
                key={media.id}
                className="card-3d border-0 cursor-pointer group overflow-hidden"
                onClick={() => handleMediaClick(media)}
              >
                <CardContent className="p-0">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    
                    {/* Media Type Icon */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <MediaIcon className="w-5 h-5 text-primary" />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-2 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {media.category}
                    </div>

                    {/* Play Button / Action Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>

                    {/* Duration/Info */}
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                      {media.type === 'video' && media.duration}
                      {media.type === 'document' && `${media.pages} pages`}
                      {media.type === 'gallery' && `${media.imageCount} images`}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {media.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {media.description}
                    </p>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                        {media.type === 'video' ? 'Watch' : media.type === 'document' ? 'View' : 'Explore'}
                      </Button>
                      
                      {media.type === 'document' && (
                        <div className="flex items-center space-x-1 text-xs text-foreground/60">
                          <Download className="w-3 h-3" />
                          <span>{media.fileSize}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedMedia && selectedMedia.type === 'video'} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-4xl bg-card border-border">
            {selectedMedia && selectedMedia.type === 'video' && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedMedia.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="aspect-video bg-background rounded-lg overflow-hidden">
                  <iframe
                    src={selectedMedia.videoUrl}
                    title={selectedMedia.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <p className="text-foreground/80 leading-relaxed">
                  {selectedMedia.description}
                </p>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-6">
            Want to contribute content or access exclusive materials?
          </p>
          <Button size="lg" className="btn-space px-8 py-4">
            Request Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MultimediaSection;