import { classList } from '../../utils/class-list';
import './Button.css';

type Props = {
    value: number
    onClick?: (value: number) => void
    hide: boolean
}

function Button(props: Props) {
    const onClickHandler = () => {
        if (props.value === 0) {
            return;
        }

        if (props.onClick) {
            props.onClick(props.value)
        }
    }

    const classes = classList({
        'button': true,
        'button_hide': props.hide,
        'button_empty': props.value === 0
    })

    return <button className={classes} type="button" onClick={onClickHandler}>{props.value}</button>
}

export default Button