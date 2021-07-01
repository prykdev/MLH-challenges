import discord

client = discord.Client()

@client.event
async def on_ready():
  print('we have logges in as {0.user}'.format(client))

@client.event
async def on_message(message):
  if message.author == client.user:
    return
  if message.content.startswith('$Hello!'):
    await message.channel.send('Hello!')


client.run('ODYwMDgwNjMwNjcwMDMyODk2.YN2CgQ.dfjHJA8NATbpUNT6qpsBDy1pe2E')

