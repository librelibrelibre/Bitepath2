import OpenAI from 'openai';
export function client(){if(!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is missing'); return new OpenAI({apiKey:process.env.OPENAI_API_KEY});}
export const model=process.env.OPENAI_MODEL||'gpt-5-mini';
export async function jsonAI(system,user){const o=client(); const r=await o.chat.completions.create({model,messages:[{role:'system',content:system},{role:'user',content:user}],response_format:{type:'json_object'}});return JSON.parse(r.choices[0].message.content)}
export const guide=`You are BitePath, a goal decomposition engine. Make meaningful goals feel easy by revealing only the smallest useful next physical action. Favor 1-20 minute actions, concrete verbs, clear done criteria, and low friction. Never overwhelm. Never return a full roadmap unless explicitly requested by the server. Output valid JSON only.`;
