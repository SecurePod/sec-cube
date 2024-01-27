package container

import (
	"context"
	"fmt"
	"time"

	"github.com/docker/docker/api/types"
	stop "github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/pkg/errors"
	"github.com/rs/zerolog/log"
)

func (c *ContainerService) CreateContainer(ctx context.Context, cli *client.Client) (*string, error) {
	create, err := cli.ContainerCreate(
		ctx,
		c.Config,
		c.HostConfig,
		c.NetworkingConfig,
		c.Platform,
		"",
	)
	if err != nil {
		return nil, errors.Wrap(err, "create container error")
	}
	log.Debug().Str("container", create.ID).Msg("container created")

	err = cli.ContainerStart(ctx, create.ID, types.ContainerStartOptions{})
	if err != nil {
		return nil, errors.Wrap(err, "start container error")
	}
	log.Debug().Str("container", create.ID).Msg("container started")

	time.AfterFunc(time.Minute*30, func() {
		if err := cli.ContainerStop(ctx, create.ID, stop.StopOptions{}); err != nil {
			fmt.Println(err)
		}
	})

	return &create.ID, nil

}
