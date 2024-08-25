# Face Detection with TensorFlow.js

Este projeto é um detector de rosto desenvolvido com [TensorFlow.js](https://www.tensorflow.org/js), uma biblioteca de machine learning para JavaScript. Ele utiliza o modelo [MediaPipe FaceMesh](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection) para detectar e marcar pontos de referência faciais em tempo real.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo interativo de observação.\
Veja a seção sobre [executar testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele empacota corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, você não pode voltar atrás!**

Se você não estiver satisfeito com a ferramenta de compilação e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de compilação do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos curados é adequado para pequenas e médias implantações, e você não deve se sentir obrigado a usar este recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte a [documentação do React](https://reactjs.org/).

Para saber mais sobre o TensorFlow.js e como ele pode ser usado para detecção de rosto, consulte a [documentação oficial](https://www.tensorflow.org/js).

## Sobre o Projeto

Este projeto utiliza o modelo [MediaPipe FaceMesh](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection) para detectar rostos e marcar pontos de referência faciais em tempo real. É uma aplicação prática de inteligência artificial (IA) que demonstra como o TensorFlow.js pode ser usado para criar aplicações de machine learning diretamente no navegador.

### Funcionalidades

- **Detecção de Rosto em Tempo Real**: Utiliza a câmera do dispositivo para detectar rostos em tempo real.
- **Marcação de Pontos de Referência Faciais**: Identifica e marca pontos de referência faciais, como olhos, nariz e boca.
- **Interface Interativa**: Interface de usuário simples e interativa para visualizar a detecção de rosto.

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TensorFlow.js**: Biblioteca de machine learning para JavaScript.
- **MediaPipe FaceMesh**: Modelo de detecção de rosto e marcação de pontos de referência faciais.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).