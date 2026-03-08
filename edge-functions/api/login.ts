export async function onRequest({ request, env }: { request: Request; env: { users: any } }): Promise<Response> {
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

    const userName = await users.get('userName')
    const userPassword = await users.get('userPassword')

    log(`KV userName: ${userName}, userPassword exists: ${!!userPassword}`)

    if (username !== userName || password !== userPassword) {
      log(`Invalid credentials for user: ${username}`)
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
