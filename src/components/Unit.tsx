interface UnitProps {
  x: number;
  y: number;
  type: string;
  npc?: boolean | undefined;
  health?: number;
  isSelected: boolean;
  onClick: (x: number, y: number) => void;
}

const Unit: React.FC<UnitProps> = ({ x, y, type, npc, health, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(x, y);
  };

  const img = npc ? `npc-${type}` : type;

  return (
    <div className={`unit unit-${type} ${isSelected ? "selected" : ""} ${npc ? "npc" : ""}`} onClick={handleClick}>
      {health && health < 100 && (
        <div className="health-bar">
          <div className="health" style={{ width: `${health}%` }}></div>
        </div>
      )}
      <img src={`/${img}.png`} alt={type} />
    </div>
  );
};

export default Unit;
