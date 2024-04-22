const LessonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      LessonLayout
      <div className="flex flex-col h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default LessonLayout;
