import { NextResponse } from 'next/server';

export default function handler(req) {
  console.log('From edge function log line 1');
  console.log('From edge function log line 2');
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
}

export const config = {
  runtime: 'edge',
};
