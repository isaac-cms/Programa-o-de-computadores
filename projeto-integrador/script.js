const audio = document.querySelector('#trilha');
const status = document.querySelector('#format-status');

if (audio && status) {
  const sources = [...audio.querySelectorAll('source')];
  const compatible = sources.find(source => audio.canPlayType(source.type));
  if (compatible) {
    const result = audio.canPlayType(compatible.type);
    const certainty = result === 'probably' ? 'provavelmente' : 'possivelmente';
    status.textContent = `Formato selecionado: ${compatible.type} — o navegador ${certainty} consegue reproduzi-lo.`;
  } else {
    status.textContent = 'Nenhum dos formatos de áudio foi reconhecido pelo navegador.';
  }
}

const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

form?.addEventListener('submit', event => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const destino = document.querySelector('#destino').value.trim();
  formStatus.textContent = `Obrigado, ${nome}! Sua ideia de viagem para ${destino} foi registrada.`;
  form.reset();
});