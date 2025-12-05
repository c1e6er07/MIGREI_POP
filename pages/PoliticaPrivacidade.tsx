import React from 'react';
import { Shield } from 'lucide-react';

const PoliticaPrivacidade: React.FC = () => (
  <div className="min-h-screen bg-slate-950 font-sans text-slate-300 py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <div className="inline-flex p-3 bg-emerald-500/10 rounded-full mb-4">
          <Shield className="w-8 h-8 text-emerald-500" />
        </div>
        <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
        <p className="text-slate-400 mt-2">Última atualização: Março de 2024</p>
      </div>

      <div className="space-y-8 bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Introdução</h2>
          <p className="leading-relaxed">
            A MIGREI MLE CONSULT (&quot;Nós&quot;) está comprometida em proteger sua privacidade.
            Esta política descreve como coletamos, usamos e protegemos suas informações pessoais ao
            utilizar nosso sistema SaaS e serviços financeiros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Dados Coletados</h2>
          <p className="leading-relaxed">
            Coletamos informações necessárias para a prestação dos serviços de gestão de energia e
            iniciação de pagamentos, incluindo:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Dados de identificação (Nome, CPF/CNPJ, Email, Telefone);</li>
            <li>Dados de consumo energético (Faturas, Unidades Consumidoras);</li>
            <li>
              Dados financeiros estritamente para fins de processamento de pagamentos via Open
              Finance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Uso das Informações</h2>
          <p className="leading-relaxed">Utilizamos seus dados para:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Processar a gestão de suas faturas de energia;</li>
            <li>Realizar análises de viabilidade econômica (Migrei IA);</li>
            <li>
              Processar pagamentos seguros através de instituições parceiras reguladas pelo BACEN;
            </li>
            <li>Cumprir obrigações legais e regulatórias do setor elétrico.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Segurança de Dados</h2>
          <p className="leading-relaxed">
            Implementamos medidas de segurança técnica e organizacional de nível bancário (SSL
            256-bits, criptografia em repouso) para proteger seus dados contra acesso não
            autorizado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Seus Direitos (LGPD)</h2>
          <p className="leading-relaxed">
            Você tem o direito de solicitar acesso, correção ou exclusão de seus dados pessoais a
            qualquer momento, conforme previsto na Lei Geral de Proteção de Dados (LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Contato</h2>
          <p className="leading-relaxed">
            Para questões relacionadas à privacidade, entre em contato com nosso DPO através do
            email: privacidade@migreimle.com.br.
          </p>
        </section>
      </div>
    </div>
  </div>
);
export default PoliticaPrivacidade;
