import type { GeneratorCallback, Tree } from '@nx/devkit';
import { formatFiles } from '@nx/devkit';
import applicationGenerator from '../application/generator';
import type { GeneratorOptions } from './schema';

export default async function (
  tree: Tree,
  options: GeneratorOptions
): Promise<GeneratorCallback | void> {
  const applicationTask = await applicationGenerator(tree, {
    name: options.astroAppName,
    addCypressTests: false,
    tags: options.tags,
  });

  await formatFiles(tree);

  return applicationTask;
}
