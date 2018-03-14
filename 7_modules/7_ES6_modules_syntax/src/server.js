import asap from './asap_module';

function asapLog() {
  asap(()=>console.log('async'));
  console.log('sync')
}
asapLog();
