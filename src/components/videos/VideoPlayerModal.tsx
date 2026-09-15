"use client";

import { Modal } from "@/components/ui/Modal";
import { useLocaleContext } from "@/context/LocaleProvider";
import { YouTubePlayer } from "./YouTubePlayer";
import { VimeoPlayer } from "./VimeoPlayer";
import { LocalVideoPlayer } from "./LocalVideoPlayer";
import type { VideoItem } from "@/types";

interface VideoPlayerModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

function renderPlayer(video: VideoItem) {
  switch (video.source.type) {
    case "youtube":
      return <YouTubePlayer videoId={video.source.src} />;
    case "vimeo":
      return <VimeoPlayer videoId={video.source.src} />;
    case "local":
      return <LocalVideoPlayer src={video.source.src} />;
    default: {
      const exhaustiveCheck: never = video.source.type;
      throw new Error(`Unhandled video source type: ${exhaustiveCheck}`);
    }
  }
}

export function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  const { t } = useLocaleContext();

  return (
    <Modal
      isOpen={video !== null}
      onClose={onClose}
      className="max-w-4xl"
      labelledBy="video-modal-title"
    >
      {video && (
        <div className="flex flex-col gap-4">
          {renderPlayer(video)}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {t.gallery.subcategoryLabels[video.category]}
            </span>
            <h3 id="video-modal-title" className="font-display text-2xl text-text">
              {video.title}
            </h3>
            {video.description && (
              <p className="mt-1 text-sm text-text-muted">{video.description}</p>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
