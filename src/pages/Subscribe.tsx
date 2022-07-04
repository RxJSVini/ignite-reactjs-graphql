import { useCreateSubscriberMutation } from "../graphql/generated";

import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import mockup from "../assets/code-mockup.png";
import { Logo } from "../components/Logo";




interface IMutationUser {
    name: string;
    email: string;
}

const Subscribe: React.FC = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [createSubscriber, { loading }] = useMutation<IMutationUser>(CREATE_SUBSCRIBER_MUTATION);
    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    const handleSubscribe = async (e: FormEvent) => {
        e.preventDefault();
        try {
            createSubscriber({
                variables: {
                    name,
                    email
                }
            }) 
            navigate("/event");

        } catch (error) {
            console.log(error);   
        }

    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1188px] flex items-center justify-between mt-20 mx-auto">
                <div className="mt-w-[648px]">
                    <Logo />
                    <h1 className="m-8 text-[2.5rem] leading-tight">
                        Construa uma aplicação completa, do zero com React.js e Graphql(GraphCMS) no Backend

                    </h1>
                    <p className="mt-4 text-gray-200">
                        Em apenas uma semana uma semana você vai dominar na pratica uma das tecnologias mais utilizadas,
                        e com alta demanda para acessar as melhores oportunidades do marcado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-10xl mb-6 block">
                       Inscreva-se gratuítamente
                    </strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            value={name}
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Digite seu nome completo"
                            onChange={(e) => setName(e.target.value)}

                        />
                        <input
                            value={email}
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)}

                        />

                        <button 
                            type="submit" 
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transitions-colors disabled:opacity-50"
                            disabled={loading}
                            >
                            
                            Garantir minha vaga
                        </button>

                    </form>

                </div>
            </div>
            <img src={mockup} className="mt-10" alt="" />
        </div>
    )
}

export { Subscribe };