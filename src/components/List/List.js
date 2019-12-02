import React from 'react'
import { useTransition, animated } from 'react-spring';
import './List.css';

const List = ({ expense }) => {

    const transitions = useTransition(expense, expense => expense.id, {
        from: { opacity: 0, },
        enter: { opacity: 1, },
    })

    return (
        <div className='list'>
            <h2>Listado Gastos</h2>
            <div className='list-expenses'>
                {transitions.map(({ props, key }) => (
                    <animated.div className='card' key={key} style={props}>
                        <div className='card-name'>{transitions[key].item.name}</div>
                        <div className='card-value'>{transitions[key].item.value}</div>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}
export default List;


/*
const [items, set] = useState([...])
const transitions = useTransition(items, item => item.key, {
from: { transform: 'translate3d(0,-40px,0)' },
enter: { transform: 'translate3d(0,0px,0)' },
leave: { transform: 'translate3d(0,-40px,0)' },
})
return transitions.map(({ item, props, key }) =>
<animated.div key={key} style={props}>{item.text}</animated.div>
)
*/


/*
{expenses.map(e => {
                    return (
                        <animated.div key={e.id} className='card' style={fade} >
                            <div className='card-name'>{e.name}</div>
                            <div className='card-value'>{e.value}</div>
                        </animated.div>
                    )
                })}
                */