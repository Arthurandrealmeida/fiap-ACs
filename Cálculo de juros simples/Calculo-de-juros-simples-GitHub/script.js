Principal=parseFloat(prompt('Digite o valor colocado'))
Taxa=parseFloat(prompt('Digite o valor da Taxa'))
TempoJuros=parseFloat(prompt('Digite o tempo'))
resultado1=Taxa/100
resultado2= Principal*resultado1*TempoJuros
resultado3= resultado2+Principal
alert(`o resultado é ${resultado3}`)