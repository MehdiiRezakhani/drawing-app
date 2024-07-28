import { create } from 'zustand';

const useCanvasBackgroundColor = create<{
  canvasBackgroundColor: string;
  setCanvasBackgroundColor: (canvasBackgroundColor: string) => void;
}>((set) => ({
  // canvasBackgroundColor: '#FFFFFF',
  canvasBackgroundColor: '#323232',
  setCanvasBackgroundColor: (canvasBackgroundColor: string) => set(() => ({ canvasBackgroundColor })),
}));

export default useCanvasBackgroundColor;
