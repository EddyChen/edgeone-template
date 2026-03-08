interface Env {
  USERS: KVNamespace
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context
  const log = console.log

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const body = await request.json()
    const { username, password } = body

    if (!username || !password) {
      log('Missing username or password')
      return new Response(JSON.stringify({ success: false, message: '用户名和密码不能为空' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    log(`Login attempt for user: ${username}`)

    if (!env.USERS) {
      log('KV not bound, using fallback auth')
      if (username === 'admin' && password === '123456') {
        log(`Login successful (fallback) for user: ${username}`)
        return new Response(JSON.stringify({ success: true, message: '登录成功', username }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      return new Response(JSON.stringify({ success: false, message: '用户名或密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const storedPassword = await env.USERS.get(`user:${username}`)

    if (!storedPassword) {
      log(`User not found: ${username}`)
      return new Response(JSON.stringify({ success: false, message: '用户名或密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (password !== storedPassword) {
      log(`Invalid password for user: ${username}`)
      return new Response(JSON.stringify({ success: false, message: '用户名或密码错误' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    log(`Login successful for user: ${username}`)
    return new Response(JSON.stringify({ success: true, message: '登录成功', username }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (e) {
    log(`Login error: ${e}`)
    return new Response(JSON.stringify({ success: false, message: '服务器错误' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
