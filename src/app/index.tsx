import Timeline from '../components/Timeline';
import { GlobalStyles } from './globalStyles';
import { AppWrapper, Container } from './styles';

export default function App() {
  const items = [
    {
      date: new Date('2025-02-10T08:00:00.000Z'),
      description: 'Corrigido erro ao salvar configurações de perfil.',
      title: 'Correção de Bug'
    },
    {
      date: new Date('2025-02-10T12:30:00.000Z'),
      description: 'Adicionado suporte a temas escuros.',
      title: 'Nova Funcionalidade'
    },
    {
      date: new Date('2025-02-11T09:45:00.000Z'),
      description: 'Otimização no carregamento de imagens no feed.',
      title: 'Melhoria de Performance'
    },
    {
      date: new Date('2025-02-11T14:15:00.000Z'),
      description: 'Aprimoramento na acessibilidade para navegação por teclado.',
      title: 'Aprimoramento de Acessibilidade'
    },
    {
      date: new Date('2025-02-12T10:00:00.000Z'),
      description: 'Correção de falha ao redefinir senha por e-mail.',
      title: 'Correção de Bug'
    },
    {
      date: new Date('2025-02-12T11:27:00.000Z'),
      description: 'Melhoria na interface do painel administrativo.',
      title: 'Atualização de UI'
    },
    {
      date: new Date('2025-02-12T11:39:00.000Z'),
      description: 'Adicionada funcionalidade de exportação de relatórios.',
      title: 'Nova Funcionalidade'
    },
    {
      date: new Date('2025-02-12T16:20:00.000Z'),
      description: 'Correção no cálculo de métricas do dashboard.',
      title: 'Correção de Bug'
    },
    {
      date: new Date('2025-02-13T09:15:00.000Z'),
      description: 'Atualização das bibliotecas de segurança.',
      title: 'Atualização de Segurança'
    },
    {
      date: new Date('2025-02-13T12:30:00.000Z'),
      description: 'Adicionado suporte a múltiplos idiomas.',
      title: 'Nova Funcionalidade'
    },
    {
      date: new Date('2025-02-13T15:45:00.000Z'),
      description: 'Melhoria no tempo de carregamento da página inicial.',
      title: 'Otimização de Performance'
    },
    {
      date: new Date('2025-02-13T17:00:00.000Z'),
      description: 'Atualização do design do painel de configurações.',
      title: 'Atualização de UI'
    },
    {
      date: new Date('2025-02-13T19:20:00.000Z'),
      description: 'Aprimoramento da responsividade em dispositivos móveis.',
      title: 'Melhoria de UX'
    },
    {
      date: new Date('2025-02-14T08:50:00.000Z'),
      description: 'Correção de bug no sistema de notificações.',
      title: 'Correção de Bug'
    },
    {
      date: new Date('2025-02-14T11:10:00.000Z'),
      description: 'Melhoria na detecção de fraudes no sistema de pagamentos.',
      title: 'Otimização de Segurança'
    },
    {
      date: new Date('2025-02-14T14:45:00.000Z'),
      description: 'Adicionado botão de desfazer exclusão de arquivos.',
      title: 'Nova Funcionalidade'
    },
    {
      date: new Date('2025-02-14T17:30:00.000Z'),
      description: 'Redesenho dos ícones do sistema.',
      title: 'Atualização de UI'
    },
    {
      date: new Date('2025-02-15T09:00:00.000Z'),
      description: 'Melhoria no tempo de resposta das APIs.',
      title: 'Otimização de Performance'
    },
    {
      date: new Date('2025-02-15T12:15:00.000Z'),
      description: 'Adicionada verificação de senha forte no cadastro.',
      title: 'Nova Funcionalidade'
    },
    {
      date: new Date('2025-02-15T16:40:00.000Z'),
      description: 'Correção de erro intermitente na autenticação de usuários.',
      title: 'Correção de Bug'
    }
  ];

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Container>
          <Timeline items={items} />
        </Container>
      </AppWrapper>
    </>
  );
}
