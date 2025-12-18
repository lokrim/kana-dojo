'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/shared/components/ui/dialog';
import PostWrapper from '@/shared/components/layout/PostWrapper';
import { patchNotesData } from '../patchNotesData';

interface PatchNotesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PatchNotesModal({
  open,
  onOpenChange
}: PatchNotesModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-3xl max-h-[80vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Patch Notes</DialogTitle>
        </DialogHeader>
        <div className='space-y-6 mt-4'>
          {patchNotesData.map((patch, index) => (
            <PostWrapper
              key={index}
              textContent={patch.changes
                .map(change => `- ${change}`)
                .join('\n')}
              tag={`v${patch.version}`}
              date={new Date(patch.date).toISOString()}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
