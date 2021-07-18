import {classList} from '../../utils/class-list';
import './Button.css';

type Props = {
    value: number;
    onClick?: (value: number) => void;
    hide: boolean;
    isCovered: boolean;
};

function Button(props: Props) {
    if (props.hide || props.value === 0) {
        return <div className="button"></div>;
    }

    const onClickHandler = () => {
        if (props.onClick) {
            props.onClick(props.value);
        }
    };

    const classes = classList({
        button: true,
        button_colorized: true,
        button_covered: props.value !== 0 && props.isCovered,
    });

    return (
        <button className={classes} type="button" onClick={onClickHandler}>
            {props.isCovered ? '' : props.value || ''}
        </button>
    );
}

export default Button;
