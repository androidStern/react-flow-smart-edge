import { within } from '@storybook/testing-library'
import React from 'react'
import { GraphWrapper } from './GraphWrapper'
import { SimulateDragAndDrop, wait } from './SimulateDragAndDrop'
import { SmartBezier, SmartStraight, SmartStep } from './SmartEdge.stories'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import type { ReactFlowProps } from '@xyflow/react'

const meta = {
	title: 'Interactions',
	component: GraphWrapper,
	argTypes: {
		edgeTypes: { table: { disable: true } },
		defaultNodes: { table: { disable: true } },
		defaultEdges: { table: { disable: true } }
	}
} satisfies Meta<typeof GraphWrapper>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<ReactFlowProps> = (args) => <GraphWrapper {...args} />

const playInteraction = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
	await wait(500)
	const canvas = within(canvasElement)
	const node4 = canvas.getByText('Node 4')
	await SimulateDragAndDrop(node4, { delta: { x: -300, y: -250 } })
	const node1 = canvas.getByText('Node 1')
	await SimulateDragAndDrop(node1, { delta: { x: -250, y: 300 } })
	const node6 = canvas.getByText('Node 6')
	await SimulateDragAndDrop(node6, { delta: { x: 250, y: -50 } })
	const node3 = canvas.getByText('Node 3')
	await SimulateDragAndDrop(node3, { delta: { x: 300, y: -100 } })
}

export const SmartBezierInteraction: Story = {
	render: Template,
	args: SmartBezier.args,
	play: playInteraction
}

export const SmartStraightInteraction: Story = {
	render: Template,
	args: SmartStraight.args,
	play: playInteraction
}

export const SmartStepInteraction: Story = {
	render: Template,
	args: SmartStep.args,
	play: playInteraction
}
