import Clock from './Clock';

export default function ClockList({ quantitys = [] }) {
    return (
      <div>
        {/* {quantitys.map((key) => (<Clock key={key} />))} */}
        {quantitys.map((key) => (<Clock key={Math.random()} />))}
      </div>
    );
}
