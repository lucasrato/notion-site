import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'
import Edit from './svgs/edit'
import Scroll from './svgs/scroll'

const features = [
  {
    text: 'Raiozin',
    icon: Lightning,
  },
  {
    text: 'que isso?',
    icon: Jamstack,
  },
  {
    text: 'Ó o Wifi',
    icon: Wifi,
  },
  {
    text: 'Configurações (não dá pra clicar)',
    icon: Edit,
  },
  {
    text: 'Stonks',
    icon: Plus,
  },
  {
    text: 'Papel',
    icon: Scroll,
  },
  {
    text: 'Notion!',
    icon: Notion,
  },
  {
    text: 'Get Things Done',
    icon: Lighthouse,
  },
]

export default () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={24} width={24} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
