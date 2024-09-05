import './Box.css';
import { BoxInfo } from '../../model/models';
export type BoxProps = {
  item: BoxInfo;
};
export const Box = (props: BoxProps) => {
  const { item } = props;
  const height = item.size === 'L' ? '300px' : '150px';
  let backgroundColor;
  let color;
  if (item.status === '完了') {
    backgroundColor = 'green';
    color = 'white';
  } else if (item.status !== '配備待ち') {
    backgroundColor = 'lch(87 84.09 84.98 / 0.75)';
    color = 'white';
  } else {
    backgroundColor = 'defaultColor';
    color = 'black';
  }

  return (
    <div className="custom-box" style={{ height }}>
      <div className="custom-box-layout">
        <span className="custom-box-number">{item.number}</span>
        <div className="custom-box-status" style={{ backgroundColor, color }}>
          {item.status}
        </div>
      </div>
    </div>
  );
};
