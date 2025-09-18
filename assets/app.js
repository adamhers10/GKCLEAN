// app.js - minimal helper utilities for Supabase integration
async function uploadToBucket(supabase, bucket, path, file){
  if(!file) return null;
  const { data, error } = await supabase.storage.from(bucket).upload(path, file, { upsert:true });
  if(error){ console.error('Upload error', error); return null; }
  const publicURL = supabase.storage.from(bucket).getPublicUrl(path).publicURL;
  return publicURL;
}
function notify(msg){ const el=document.getElementById('debug'); if(el) el.textContent = msg; console.log(msg); }
function fmtDate(iso){ if(!iso) return ''; const d = new Date(iso); return d.toLocaleString(); }
