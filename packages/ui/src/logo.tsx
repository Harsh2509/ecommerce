// Logo of our application is here.
export const Logo = ({ classname }: { classname?: string }) => {
  return (
    <div className={"flex items-center gap-2 " + classname}>
      <a href="/">
        <span className="text-3xl font-bold italic ">WOO</span>
      </a>
    </div>
  );
};
