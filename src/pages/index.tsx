import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>Tentando usar Notion como site</h1>
      <h2>
        Carai Wendel, me da um help ai'{' '}
        <ExtLink
          href="https://github.com/vercel/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          SSG
        </ExtLink>
      </h2>

      <Features />

      <div className="explanation">
        <p>
          To tentando fazer esse negócio funcionar aqui, mas ta bem feio porque não sei editar o site direito,
          to escrevendo o site todo no VSCode e isso não parece muito certo
        </p>

        <p>
         Algo está certo, porque a página está funcionando, e fiz uma página de teste ali em "Blog",
         mas ainda não está como eu imaginava..
        </p>
      </div>
    </div>
  </>
)
