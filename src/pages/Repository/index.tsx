import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repositories: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GithubExplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/66989431?v=4"
            alt="Triunfo Imóveis"
          />
          <div>
            <strong>TriunfoImoveis/triunfo-app</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>87</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>teste</strong>
            <p>Teste</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
