import ArrowDown from "../components/ArrowDown";
function SectionsCounter() {
  return (
    <div className="mx-4 pt-20 pb-10 flex gap-2 self-start items-center lg:pb-0">
      <p className="uppercase text-micro">01 //04 — Scroll</p>
      <ArrowDown width={11} height={11} />
    </div>
  );
}
export default SectionsCounter;
