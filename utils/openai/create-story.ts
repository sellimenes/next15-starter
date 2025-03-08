'use server';

import OpenAI from 'openai';

type StoryLength = 'short' | 'medium' | 'long';

interface StoryPrompt {
  childName: string;
  age: string;
  theme: string;
  length: StoryLength;
  language: string;
  additionalDetails?: string;
}

const LENGTH_GUIDE: Record<StoryLength, string> = {
  short: 'around 300 words',
  medium: 'around 600 words',
  long: 'around 1000 words',
};

const generateSystemPrompt = (prompt: StoryPrompt): string => {
  return `You are a creative children's story writer. Create an engaging, age-appropriate story with the following specifications:

- Main Character Name: ${prompt.childName} (Make sure to use this name as the main character of the story)
- Target age group: ${prompt.age}
- Theme: ${prompt.theme}
- Length: ${LENGTH_GUIDE[prompt.length]}
- Language: ${prompt.language}
${prompt.additionalDetails ? `- Additional requirements: ${prompt.additionalDetails}` : ''}

The story should be:
1. Age-appropriate and engaging
2. Educational but entertaining
3. Include positive messages and morals
4. Be suitable for bedtime reading
5. Have a clear beginning, middle, and end
6. Make ${prompt.childName} the hero/main character of the story
7. Create situations where ${prompt.childName} shows positive character traits and overcomes challenges

Please provide the response in the following JSON format:
{
  "title": "Story title (should include ${prompt.childName}'s name if possible)",
  "content": "Full story content",
  "summary": "Brief summary of the story",
  "recommendedAge": "Recommended age range",
  "theme": "Main theme of the story",
  "mainCharacter": "${prompt.childName}",
  "language": "Story language",
  "estimatedReadingTime": "Estimated reading time in minutes",
  "characterTraits": "List of positive character traits demonstrated by ${prompt.childName} in the story"
}`;
};

export async function createStory(prompt: StoryPrompt) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: generateSystemPrompt(prompt),
        },
      ],
      max_tokens: 2000,
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const result = response.choices[0]?.message?.content;
    
    if (!result) {
      throw new Error('No story generated');
    }

    return JSON.parse(result);
  } catch (error) {
    console.error('Error generating story:', error);
    throw error;
  }
}
