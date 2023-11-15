# openplayground

An LLM playground.

Forked from https://github.com/nat/openplayground, I've added more default models and some cosmetic updates. Feel free to submit PR's.

#### Features

- Use any model from [OpenAI](https://openai.com), [Anthropic](https://anthropic.com), [Cohere](https://cohere.com), [Forefront](https://forefront.ai), [HuggingFace](https://huggingface.co), [Aleph Alpha](https://aleph-alpha.com), [Replicate](https://replicate.com), [Banana](https://banana.dev) and [llama.cpp](https://github.com/ggerganov/llama.cpp).
- Full playground UI, including history, parameter tuning, keyboard shortcuts, and logprops.
- Compare models side-by-side with the same prompt, individually tune model parameters, and retry with different parameters.
- Automatically detects local models in your HuggingFace cache, and lets you install new ones.
- Works OK on your phone.
- Probably won't kill everyone.


## How to run for development

```sh
# install
make install

# in one terminal run the frontend
make frontend

# in another terminal
make backend

# clean config (after making changes to model.json)
make clean
```

## Contributions welcome. Some ideas:

- Add a token counter [#1][i1]
- Ability to Delete local Hugging Face models from the cache [#2][i2]
- Display progress-bar when downloading Hugging Face models [#3][i3]
- Add a cost counter compare page [#4][i4]
- Measure and display time to first token [#5][i5]
- Chatgpt plugin support [#6][i6]

[i1]: https://github.com/quilime/openplayground/issues/1
[i2]: https://github.com/quilime/openplayground/issues/2
[i3]: https://github.com/quilime/openplayground/issues/3
[i4]: https://github.com/quilime/openplayground/issues/4
[i5]: https://github.com/quilime/openplayground/issues/5
[i6]: https://github.com/quilime/openplayground/issues/6

## Adding models to openplayground

Models and providers have three types in openplayground:

- Searchable
- Local inference
- API

You can add models in `server/models.json` with the following schema:


#### Local inference

For models running locally on your device you can add them to openplayground like the following (a minimal example):

```json
"llama": {
    "api_key" : false,
    "models" : {
        "llama-70b": {
            "parameters": {
                "temperature": {
                    "value": 0.5,
                    "range": [
                        0.1,
                        1.0
                    ]
                },
            }
        }
    }
}
```

Keep in mind you will need to add a generation method for your model in `server/app.py`. Take a look at `local_text_generation()` as an example.


#### API Provider Inference

This is for model providers like OpenAI, cohere, forefront, and more. You can connect them easily into openplayground (a minimal example):

```json
"cohere": {
    "api_key" : true,
    "models" : {
        "xlarge": {
            "parameters": {
                "temperature": {
                    "value": 0.5,
                    "range": [
                        0.1,
                        1.0
                    ]
                },
            }
        }
    }
}
```

You will need to add a generation method for your model in `server/app.py`. Take a look at `openai_text_generation()` or `cohere_text_generation()` as an example.

#### Searchable models

We use this for Huggingface Remote Inference models, the search endpoint is useful for scaling to N models in the settings page.

```json
"provider_name": {
    "api_key": true,
    "search": {
        "endpoint": "ENDPOINT_URL"
    },
    "parameters": {
        "parameter": {
            "value": 1.0,
            "range": [
                0.1,
                1.0
            ]
        },
    }
}
```

#### Credits

Instigated by Nat Friedman. Initial implementation by [Zain Huda](https://github.com/zainhuda) as a repl.it bounty. Many features and extensive refactoring by [Alex Lourenco](https://github.com/AlexanderLourenco).
