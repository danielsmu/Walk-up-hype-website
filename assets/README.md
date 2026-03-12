# assets/

Place the following files in this folder before launch:

| File | Description |
|------|-------------|
| `icon.png` | App icon — flaming baseball, ~512×512px recommended |
| `screenshot-1.png` | iPhone screenshot (Game Mode screen) |
| `screenshot-2.png` | iPhone screenshot (Player Roster screen) |
| `demo-free.mp3` | AVSpeechSynthesizer recording — e.g. "Now batting third, number seven… JAKE… MILLERRRR!" |
| `demo-premium.mp3` | ElevenLabs Veteran Play-by-Play export — same script |

## Recording the free demo
1. Run the app in iOS Simulator with a test player.
2. Capture audio via QuickTime → New Audio Recording → select Simulator as source.
3. Export as MP3 or AAC, rename to `demo-free.mp3`.

## Recording the premium demo
1. Go to [elevenlabs.io](https://elevenlabs.io).
2. Select the *Veteran Play-by-Play* voice (or closest sports-announcer voice).
3. Paste script, generate, download MP3, rename to `demo-premium.mp3`.
